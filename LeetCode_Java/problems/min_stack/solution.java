class MinStack {

        private List<Integer> storage;
        private List<Integer> minn;
        private int length;

    public MinStack() {
        this.storage = new ArrayList<>();
        this.minn = new ArrayList<>();
        this.length = 0;
    }
    
    public void push(int val) {
        this.storage.add(val);
        this.length++;
        if (this.minn.size() == 0 || val <= this.minn.get(this.minn.size() - 1) ) {
            this.minn.add(val);
        }
    }
    
    public void pop() {
        if (this.storage.size() == 0) {
            return;
        }
        int out = this.storage.remove(this.storage.size() - 1);
        this.length--;
        if (out == this.minn.get(this.minn.size() - 1)) {
            this.minn.remove(this.minn.size() - 1);
        }
    }
    
    public int top() {
        return this.storage.get(this.storage.size() - 1);
        
    }
    
    public int getMin() {
        if (this.minn.size() != 0) {
            return this.minn.get(this.minn.size() - 1);
        } else {
            return 0;
        }
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */