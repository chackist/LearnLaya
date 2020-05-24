import { ui } from "./../ui/layaMaxUI";

export default class SetDialog extends ui.ui.set_dialogUI {

    constructor() {
        super();
        this.timer = new Laya.Timer(false);
    }

    onAwake() {
        this.pause_label.on(Laya.Event.CLICK, this, () => {
            Laya.timer.pause();
            Laya.updateTimer.pause();
            let tweenMap = Laya.Tween.tweenMap;
            for(let gid in tweenMap) {
                let arr = tweenMap[gid];
                for (let t of arr) {
                    t.pause();
                }
            }
        });

        this.resume_label.on(Laya.Event.CLICK, this, () => {
            Laya.timer.resume();
            Laya.updateTimer.resume();
            let tweenMap = Laya.Tween.tweenMap;
            for(let gid in tweenMap) {
                let arr = tweenMap[gid];
                for (let t of arr) {
                    t.resume();
                }
            }
        });

        let move1 =  () => {
            let move2 = () => {
                Laya.Tween.to(this.resume_label, {x: 0}, 1000, Laya.Ease.linearNone, Laya.Handler.create(this, move1));
            };
            Laya.Tween.to(this.resume_label, {x: 200}, 1000, Laya.Ease.linearNone, Laya.Handler.create(this, move2));
        }
        move1();
    };

}