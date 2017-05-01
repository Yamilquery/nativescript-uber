declare module "nativescript-uber" {
	import { View } from "ui/core/view";
	export class UberView extends View {
		public latitude: number;
        public longitude: number;
	}
}