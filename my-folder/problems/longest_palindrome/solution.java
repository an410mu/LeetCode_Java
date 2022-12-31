class Solution {
    public int longestPalindrome(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (char ch: s.toCharArray()) {
           if (map.get(ch) == null) {
               map.put(ch, 1);
           } else {
               map.put(ch, map.get(ch)+1);
           }
        }
        int output = 0, odd = 0;
        for (char key : map.keySet()) {
            if (map.get(key) % 2 == 0) {
                output += map.get(key);
            } else {
                output += map.get(key) - 1;
                odd += 1;
            }
        }

        if (odd > 0) {
            output += 1;
        }
        
        return output;
    }
}