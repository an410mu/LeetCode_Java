# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash = Hash.new(0)
    nums.each_with_index {|num,index| hash[num] = index}
    (0..nums.length).each do |i|
        complement  = target - nums[i]
        if (hash[complement] != i && hash.has_key?(complement))
            return [i,hash[complement]]
        end 
    end 
end