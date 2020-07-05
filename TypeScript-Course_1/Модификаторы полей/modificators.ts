class Animal {
    protected voice: string = ""
    public color: string = "black"

    private go() {// не наследуется
        console.log("GO")
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()