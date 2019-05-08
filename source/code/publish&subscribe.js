/**
 * 发布订阅 设计模式
 * 
 * 报社和订报人
 */

//
class NewspaperOffice {
    constructor() {
        this.ordered = []
    }

    addSubscribe(person) {
        this.ordered.push(person)
        return this
    }

    // 发布
    publish() {
        for (let per of this.ordered) {
            per.update();
        }
    }
}

class People {
    constructor(name) {
        this.name = name
    }

    update() {
        console.log(`${this.name} get information`)
    }
}

let newspaper = new NewspaperOffice

let p1 = new People('p1')
let p2 = new People('p2')
let p3 = new People('p3')

// 增加订阅过程
newspaper.addSubscribe(p1)
    .addSubscribe(p2)
    .addSubscribe(p3)

// 发布更新
newspaper.publish()
