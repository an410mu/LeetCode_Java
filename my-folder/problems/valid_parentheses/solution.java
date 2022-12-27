class Solution {
    public boolean isValid(String s) {
        if (s.length() % 2 != 0) {
            return false;
        }
        HashMap<String, String> map = new HashMap<>();
        map.put("(", ")");
        map.put("{", "}");
        map.put("[", "]");
        Stack<String> stack = new Stack<>();
        for (char ch : s.toCharArray()){
            String ele = new Character(ch).toString();
            if (map.containsKey(ele)){
                stack.push(map.get(ele));
            } else if (stack.isEmpty() || !stack.pop().equals(ele)) {
                return false;
            }
        }
        return stack.isEmpty();
    }
}