class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        if (Arrays.stream(cost).sum() > Arrays.stream(gas).sum()) {
            return -1;
        }

        int index = 0;
        int tank = 0;
        for (int i = 0; i < gas.length; i++) {
            tank = tank + gas[i] - cost[i];
            if (tank < 0) {
                tank = 0;
                index = i + 1;
            }
        }
        return index;
    }
}