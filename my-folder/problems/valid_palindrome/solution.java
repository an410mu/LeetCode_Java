class Solution {
    public boolean isPalindrome(String s) {
        String text = "";
        for (char ch : s.toCharArray()) {
            if (Character.isLetter(ch) || Character.isDigit(ch)) {
                text += ch;
            }
        }

        text = text.toLowerCase();
        System.out.println(text);
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) != text.charAt(text.length()-1-i)) {
                return false;
            }
        }
        return true;
    }
}