class BEMClassNameGenerator {
    constructor(blockName) {
        this.blockName = blockName;
    }

    // class="block"
    block = () => this.blockName;

    // class="block block--white"
    blockWithModifiers = (...modifiers) => {
        let returnString = this.blockName;
        modifiers.forEach(modifier => {
            returnString += ' ';
            returnString += this.blockName + '--' + modifier;
        });
        return returnString;
    }

    // class="block__element"
    element = elementName => this.blockName + '__' + elementName;
    
    // class="block__element block__element--white"
    elementWithModifiers = (elementName, ...modifiers) => {
        let returnString = this.blockName + '__' + elementName;
        modifiers.forEach(modifier => {
            returnString += ' ';
            returnString += this.blockName + '__' + elementName + '--' + modifier;
        });
        return returnString;
    }
}

export default BEMClassNameGenerator;