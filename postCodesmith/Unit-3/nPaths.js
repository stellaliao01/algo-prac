/**
 *
 *  How many unique ways can one move from one corner of a n x n board to the other corner.
 *  You can move up, down, left, and right. You cannot visit spots that you have visited already.
 *  Make your solution work for a grid of any size.
 *
 */

// A Board class might be useful
class Board {
    constructor(size) {
      this.board = [];
      this.size = size;
      for (let x = 0; x < size; x++) {
        this.board.push([]);
        for (let y = 0; y < size; y++) {
          this.board[x].push(false);
        }
      }
    }
  
    toggleVisitedFlagAt(position) {
      const x = position[0];
      const y = position[1];
      this.board[x][y] = !this.board[x][y];
    }
  
    hasBeenVisitedAt(position) {
      const x = position[0];
      const y = position[1];
      return this.board[x][y];
    }
  
    isOutOfBoundsAt(position) {
      const x = position[0];
      const y = position[1];
      return x >= this.size || y >= this.size || x < 0 || y < 0;
    }
  
    oppositeCornerIs(position) {
      const x = position[0];
      const y = position[1];
      return x === this.size - 1 && y === this.size - 1;
    }
  }
  
  function toTheEastOf(position) {
    const x = position[0];
    const y = position[1];
    return [x + 1, y];
  }
  
  function toTheSouthOf(position) {
    const x = position[0];
    const y = position[1];
    return [x, y + 1];
  }
  
  function toTheWestOf(position) {
    const x = position[0];
    const y = position[1];
    return [x - 1, y];
  }
  
  function toTheNorthOf(position) {
    const x = position[0];
    const y = position[1];
    return [x, y - 1];
  }
  
  // Counts the unique paths from one corner of a n x n board to the opposite corner
  // When finding a path no cell is visited more than once
  // Time Complexity = O(4 ** n), Space Complexity O(n ** 2)
  function nPaths(size) {
    const BOARD = new Board(size);
    const STARTING_POSITION = [0, 0];
  
    function countPaths(currentPosition) {
      if (BOARD.isOutOfBoundsAt(currentPosition) || BOARD.hasBeenVisitedAt(currentPosition)) {
        return 0;
      }
      if (BOARD.oppositeCornerIs(currentPosition)) {
        return 1;
      }
      BOARD.toggleVisitedFlagAt(currentPosition);
      let numPathsFromCurrentPosition = 0;
      numPathsFromCurrentPosition += countPaths(toTheEastOf(currentPosition));
      numPathsFromCurrentPosition += countPaths(toTheSouthOf(currentPosition));
      numPathsFromCurrentPosition += countPaths(toTheWestOf(currentPosition));
      numPathsFromCurrentPosition += countPaths(toTheNorthOf(currentPosition));
      BOARD.toggleVisitedFlagAt(currentPosition);
      return numPathsFromCurrentPosition;
    }
  
    return countPaths(STARTING_POSITION);
  }
  