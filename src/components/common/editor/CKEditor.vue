<template>
  <div>
    <ckeditor
      :editor="editor"
      v-model="editText"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";
import { getUserListFromThemeReply } from "@api/user/user";
import { memberRouter } from "@/router/routerUrl";
export default {
  components: {
    ckeditor: CKEditor.component
  },
  created() {
    this.initReplyUserList();
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    themeId: {}
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        removePlugins: ["MediaEmbed"], //除去视频按钮
        language: "zh-cn", //中文包
        plugins: [
          Mention,
          this.MentionCustomization,
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          BlockQuote,
          Heading
        ],
        mention: {
          feeds: [
            {
              marker: "@",
              feed: this.getFeedItems
            }
          ]
        },
        toolbar: [
          "heading", //段落
          "|", //分隔
          "bold", //加粗
          "italic", //倾斜
          "link", //超链接
          "bulletedList", //项目列表
          "numberedList", //编号列表
          "blockQuote", //块引用
          "undo", //撤销
          "redo" //重做
        ]
      },
      editText: this.value,
      replyUserList: []
    };
  },
  methods: {
    cleanContent(){
      this.editText = "";
    },
    memberUrl(id) {
      return memberRouter(id);
    },
    addMark(replyUserList) {
      replyUserList.forEach(function(user) {
        user.id = "@" + user.cUsername;
      });
    },
    initReplyUserList() {
      getUserListFromThemeReply(this.themeId).then(data => {
        this.replyUserList = data.data;
        if(this.replyUserList.length!=0)
            this.addMark(this.replyUserList);
      });
    },
    getFeedItems(queryText) {
      // As an example of an asynchronous action, return a promise
      // that resolves after a 100ms timeout.
      // This can be a server request or any sort of delayed action.
      return new Promise(resolve => {
        setTimeout(() => {
          const itemsToDisplay = this.replyUserList
            // Filter out the full list of all items to only those matching the query text.
            .filter(isItemMatching)
            // Return 10 items max - needed for generic queries when the list may contain hundreds of elements.
            .slice(0, 10);

          resolve(itemsToDisplay);
        }, 100);
      });

      // Filtering function - it uses the `name` and `username` properties of an item to find a match.
      function isItemMatching(item) {
        // Make the search case-insensitive.
        const searchString = queryText.toLowerCase();

        // Include an item in the search results if the name or username includes the current user input.
        return item.cUsername.toLowerCase().includes(searchString);
      }
    },
    MentionCustomization(editor) {
      // The upcast converter will convert <a class="mention" href="" data-user-id="">
      // elements to the model 'mention' attribute.
      editor.conversion.for("upcast").elementToAttribute({
        view: {
          name: "router-link",
          key: "data-mention",
          classes: "mention",
          attributes: {
            to: true,
            "data-user-id": true
          }
        },
        model: {
          key: "mention",
          value: viewItem => {
            // The mention feature expects that the mention attribute value
            // in the model is a plain object with a set of additional attributes.
            // In order to create a proper object, use the toMentionAttribute helper method:
            const mentionAttribute = editor.plugins
              .get("Mention")
              .toMentionAttribute(viewItem, {
                // Add any other properties that you need.
                link: viewItem.getAttribute("to"),
                nId: viewItem.getAttribute("data-user-id")
              });

            return mentionAttribute;
          }
        },
        converterPriority: "high"
      });

      // Downcast the model 'mention' text attribute to a view <a> element.
      editor.conversion.for("downcast").attributeToElement({
        model: "mention",
        view: (modelAttributeValue, viewWriter) => {
          // Do not convert empty attributes (lack of value means no mention).
          if (!modelAttributeValue) {
            return;
          }

          return viewWriter.createAttributeElement("router-link", {
            class: "mention",
            "data-mention": modelAttributeValue.id,
            "data-user-id": modelAttributeValue.nId,
            to: memberRouter(modelAttributeValue.nId)
          });
        },
        converterPriority: "high"
      });
    }
  },
  watch: {
    editText: function(newVal, oldVal) {
      this.$emit("update:value", newVal);
    }
  }
};
</script>

<style>
.ck-editor__editable_inline {
  height: 200px !important;
  max-height: 200px;
}
</style>
