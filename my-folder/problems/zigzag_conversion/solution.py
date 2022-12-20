class Solution:
    def convert(self, s: str, numRows: int) -> str:
        output = ''
        if numRows == 1:
            return s
        for row in range(0, numRows):
            increment = 2 * (numRows - 1)
            for i in range(row, len(s), increment):
                output += s[i]
                if row > 0 and row < numRows - 1 and (i + increment - 2*row) < len(s) :
                    # 1 5 7 11
                    # 2 4 8 10
                    output +=  s[i + increment - 2 * row]
        return output