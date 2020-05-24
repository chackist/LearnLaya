import GameUI from "./GameUI";

export default class Game extends Laya.Script {
    private frameCnt: number = 0;
    private bulletArr: Laya.Label[] = [];
    private delay:number = 0;
    onUpdate(): void{
        let delta = Laya.timer.delta;
        if (this.frameCnt % 100 == 0) {
            console.log('onUpdate', this.frameCnt);
        }
        if (delta > 500) {
            console.log('onUpdate more than', this.frameCnt, delta);
		}
        this.frameCnt++;


        if (this.delay <= 0) {
            this.createBullet();
            this.delay = 500;
        }

        this.delay -= delta;
        let speed = 200 / 1000;
        for(let bullet of this.bulletArr) {
            bullet.x -= speed * delta;
        }
    }
    createBullet(): void{
        let bullet: Laya.Label = new Laya.Label((this.bulletArr.length + 1) + '');
        bullet.color = '#ff0000';
        GameUI.instance.addChild(bullet);
        bullet.pos(1000, 500);
        this.bulletArr.push(bullet);
    }
}