
@Component
class DecoratorsPra {

    add(a: number, b: number): number {
        return a + b;
    }
}
function Component(target: typeof DecoratorsPra, context: ClassDecoratorContext<typeof DecoratorsPra>): void | typeof DecoratorsPra {
    console.log(`Component decorator called for: ${target.name}`);
    // You can add additional logic here if needed
    return target;
}

