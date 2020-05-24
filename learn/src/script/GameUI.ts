import { ui } from "./../ui/layaMaxUI";
import SetDialog from "./SetDialog";

export default class GameUI extends ui.ui.mian_sceneUI {
    /**设置单例的引用方式，方便其他类引用 */
    static instance: GameUI;

    constructor() {
        super();
        GameUI.instance = this;
        //关闭多点触控，否则就无敌了
        Laya.MouseManager.multiTouchEnabled = false;
    }

    onAwake() {
        this.pause_label.on(Laya.Event.CLICK, this, () => {
            console.log('click');
            let dialog = new SetDialog();
            dialog.popup(true, false);
        });

        let move1 =  () => {
            let move2 = () => {
                Laya.Tween.to(this.pause_label, {x: 0}, 2000, Laya.Ease.linearNone, Laya.Handler.create(this, move1));
            };
            Laya.Tween.to(this.pause_label, {x: 500}, 2000, Laya.Ease.linearNone, Laya.Handler.create(this, move2));
        }
        move1();
    };

}