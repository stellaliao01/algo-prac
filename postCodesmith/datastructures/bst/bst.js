function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.add = function (value) {

    function addNode(root) {
        if (root === null) {
            return new BinarySearchTree(value);
        } else {
            if (root.value === value) return root;
            else if (root.value < value) {
                root.right = addNode(root.right);
            } else {
                root.left = addNode(root.left);
            }
        }
        return root;
    }
    addNode(this);
};

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) return true;
    if (this.right && this.value < value) return this.right.contains(value);
    else if (this.left && this.value > value) return this.left.contains(value);
    return false;
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function (callback) {
    //callback on this.value (current node)
    callback(this.value);

    //go left, call callback on left value
    if (this.left) this.left.depthFirstPre(callback);

    //go right, call callback on right value
    if (this.right) this.right.depthFirstPre(callback);
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function (callback) {
    // go left until we hit null
    if (this.left) this.left.depthFirstIn(callback);
    // if we hit null we invoke the callback on value
    callback(this.value);
    //proceed right until the very end
    if (this.right) this.right.depthFirstIn(callback);
};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function (callback) {
    // go left until we hit null
    if (this.left) this.left.depthFirstPost(callback);

    //proceed right until the very end
    if (this.right) this.right.depthFirstPost(callback);
    // if we hit null we invoke the callback on value
    callback(this.value);
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function (callback) {
    //make a queue with this as the first element
    let queue = [this];

    while (queue.length !== 0) {
        let temp = queue.shift();
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
        callback(temp.value);
    }
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function () { };

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function () { };

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function () { };

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function (item) { };




def inOrderTraverse(tree, array):
    # Write your code here.
	if tree:
		inOrderTraverse(tree.left,array)
		array.append(tree.value)
		inOrderTraverse(tree.right,array)
	return array
def preOrderTraverse(tree, array):
    # Write your code here.
    if tree:
		array.append(tree.value)
		preOrderTraverse(tree.left,array)
		preOrderTraverse(tree.right,array)
	return array
def postOrderTraverse(tree, array):
    # Write your code here.
    if tree:
		postOrderTraverse(tree.left,array)
		postOrderTraverse(tree.right,array)
		array.append(tree.value)
	return array