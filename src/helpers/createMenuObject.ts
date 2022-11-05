type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fishes';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fishes: false
    };

    if (activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}