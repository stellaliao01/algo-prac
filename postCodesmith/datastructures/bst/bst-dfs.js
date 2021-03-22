//iterative
function dfs(node, target) {
    let stack = [node];
  
    while (stack.length > 0) {
      let cur = stack.pop(); // pop last element
      if (cur.value === target) {
        return true;
      }
      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
    }
  
    return false;
  }


//recursive
  function dfs(node, target) {
    if (!node) {
      return false;
    }
  
    if (node.value === target) {
      return true;
    }
  
    return dfs(node.left, target) || dfs(node.right, target);
  }