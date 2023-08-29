import { Schema, model } from "mongoose";

export interface U {
	_id: string;
	rpg: {
		name: string;
		history: string;
		race: "elf" | "human" | "goblin" | "fairy";
		class: "mage" | "warrior" | "tank";
		locate: string;
		xp: number;
		reqXp: number;
		lvl: number;
	};
	economy: {
		money: number;
		bank: number;
		daily: {
			lastReward: number;
			streak: number;
		};
		work: {
			lastReward: number;
			job: string;
			level: number;
			xp: number;
			reqXp: number;
		};
		cooldowns: {
			hunt: number;
			hunting: boolean;
		};
	};
}

export const UserSchema = new Schema<U>({
	_id: String,
	rpg: {
		name: String,
		history: String,
		race: String,
		class: String,
		locate: String,
		xp: { type: Number, default: 0 },
		reqXp: { type: Number, default: 500 },
		lvl: { type: Number, default: 1 },
	},
	economy: {
		money: { type: Number, default: 0 },
		bank: Number,
		daily: {
			lastReward: Number,
			streak: Number,
		},
		work: {
			lastReward: Number,
			job: String,
			level: Number,
			xp: Number,
			reqXp: Number,
		},
		cooldowns: {
			hunt: { type: Number, default: 0 },
			hunting: Boolean,
		},
	},
});

const User = model<U>("users", UserSchema);
export default User;
