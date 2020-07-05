// От абстрактных классов иожно наследоваться, но они никуда не компилируются
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log("Component on render")
    }
    info(): string {
        return "This is info";
    }
}