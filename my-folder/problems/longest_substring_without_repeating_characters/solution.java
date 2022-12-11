class Solution {
    public int lengthOfLongestSubstring(String s) {
        //need a hashmap to track repeat char 
        //set left pointer, point at non-repeat char, if repeat increment
        int maxLength = 0;
        int left = 0;
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            if (map.containsKey(s.charAt(i))) {
                left = Math.max(left, map.get(s.charAt(i)) + 1);
            }
            map.put(s.charAt(i), i);
            maxLength = Math.max(maxLength, i - left + 1);
        }
        return maxLength;
    }
}