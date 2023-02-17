import React from "react";
import card from '../assets/svgs/card.svg'
import card_focus from '../assets/svgs/card_focus.svg'
import chat from '../assets/svgs/chat.svg'
import chat_focus from '../assets/svgs/chat_focus.svg'
import profile from '../assets/svgs/profile.svg'
import profile_focus from '../assets/svgs/profile_focus.svg'
import hot from '../assets/svgs/hot.svg'
import hot_focus from '../assets/svgs/hot_focus.svg'
import star from '../assets/svgs/star.svg'
import star_focus from '../assets/svgs/star_focus.svg'
import cancel from '../assets/svgs/cancel.svg'
import heart from '../assets/svgs/heart.svg'
import call from '../assets/svgs/call.svg'
import share from '../assets/svgs/share.svg'
import settings from '../assets/svgs/settings.svg'
import check from '../assets/svgs/check.svg'
import place from '../assets/svgs/place.svg'
import arrow_next from '../assets/svgs/arrow_next.svg'
import language from '../assets/svgs/language.svg'
import power_settings from '../assets/svgs/power_settings.svg'

const SVGs = {
    card,
    card_focus,
    chat,
    chat_focus,
    profile,
    profile_focus,
    hot,
    hot_focus,
    star,
    star_focus,
    cancel,
    heart,
    call,
    settings,
    share,
    check,
    place,
    arrow_next,
    language,
    power_settings
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} width={width} height={height} />
        } else {
            return null
        }
    }
}