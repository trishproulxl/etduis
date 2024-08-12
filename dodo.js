treeProto.copy = function () {
    // Create a new node with the same value as the current node
    const newNode = new TreeNode(this.value);

    // Recursively copy all children
    this.children.forEach(child => {
        newNode.children.push(child.copy());
    });

    return newNode;
};
