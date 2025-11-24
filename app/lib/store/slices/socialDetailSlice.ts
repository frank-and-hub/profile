import { SocialInterface } from "@/app/api/interfaces/social";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const staticSocial: SocialInterface[] = [
    {
        icon: FaFacebook,
        href: 'https://facebook.com/your-profile',
        label: 'Facebook',
    }, {
        icon: FaTwitter,
        href: 'https://twitter.com/your-handle',
        label: 'Twitter',
    }, {
        icon: FaInstagram,
        href: 'https://instagram.com/your-profile',
        label: 'Instagram',
    }, {
        icon: FaGithub,
        href: 'https://github.com/frank-and-hub',
        label: 'Github',
    }, {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/sourab-biswas-a7935a1a1',
        label: 'LinkedIn',
    }
];

const Sociallice = createSlice({
    name: "social",
    initialState: {
        list: [...staticSocial] as SocialInterface[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        addSocial: (state, action: PayloadAction<SocialInterface>) => {
            state.list.push(action.payload);
        },
        removeSocial: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((item) => item.href !== action.payload);
        },
    },
    extraReducers: (builder) => { },
});

export const { addSocial, removeSocial } = Sociallice.actions;
export default Sociallice.reducer;
