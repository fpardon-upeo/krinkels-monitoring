/**
 * Created by Frederik on 10/30/2024.
 */

// dragStateUtil.js
const subscribers = new Set();

const DragState = {
  currentDraggedItem: null,

  setDraggedItem(item) {
    this.currentDraggedItem = item;
    this.notifySubscribers();
  },

  getDraggedItem() {
    return this.currentDraggedItem;
  },

  clearDraggedItem() {
    this.currentDraggedItem = null;
    this.notifySubscribers();
  },

  subscribe(callback) {
    subscribers.add(callback);
  },

  unsubscribe(callback) {
    subscribers.delete(callback);
  },

  notifySubscribers() {
    subscribers.forEach(callback => {
      callback(this.currentDraggedItem);
    });
  }
};

export default DragState;