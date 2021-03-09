import { createContext, Dispatch, SetStateAction } from 'react';

export interface UserInfo {
	uid: string;
	username: string;
	email: string;
	photoURL: string;
	createdAt: Date;
	lastSignedIn: Date;
	admin: boolean;
}

export interface CalendarInfo {
	timeZone: string;
	currentTime: Date;
	viewType: string;
	setTimeZone: Dispatch<SetStateAction<string>>;
	setCurrentTime: Dispatch<SetStateAction<Date>>;
	setViewType: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<Partial<UserInfo>>({});
export const CalendarContext = createContext<Partial<CalendarInfo>>({});
