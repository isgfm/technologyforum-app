export function memberRouter(userId){
    return "/member/" + userId;
}

export function nodeRouter(router){
    return "/go/" + router;
}

export function tabRouter(router){
    return "/tab/" + router;
}

export function themeRouter(themeId){
    return "/t/" + themeId;
}

export const newThemeRouter = "/new";

export function themeRouterHtml(theme){
    return `<router-link to="${themeRouter(theme.nId)}">
    ${theme.cThemeTitle}
  </router-link>`;
}

export function userRouterHtml(user){
    return `<router-link to="${memberRouter(user.nId)}">
    ${user.cUsername}
  </router-link>`;
}
