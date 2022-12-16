class Solution:
    def isValid(self, s: str) -> bool:
        obj = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        heap = []
        for ele in s:
            if ele in obj:
                heap.append(obj[ele])
            elif len(heap) == 0 or ele != heap.pop():
                    return False
        return len(heap) == 0