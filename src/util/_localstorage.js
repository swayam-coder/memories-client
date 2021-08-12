let local;

if(localStorage.getItem('profile')){
    local = JSON.parse(localStorage.getItem('profile'))
}

export const AccessToken = local?.AccessToken;
export const RefreshToken = local?.RefreshToken;
export const User = local?.result


