class Solution {
    public List<String> letterCombinations(String digits) {
        String[] map = new String[] {"", "","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        LinkedList<String> output = new LinkedList<>();
        if (digits.length() == 0) {
            return output;
        }
        output.add("");
        while(output.peek().length() != digits.length()) {
            String cur = output.remove();
            String option = map[digits.charAt(cur.length()) - '0'];
            for (char ch : option.toCharArray()) {
                output.add(cur + ch);
            }
        }

        return output;
        
    }
}