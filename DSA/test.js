


// #Two Sum.
function twoSum(list, target)
{
    let dic = {};
    let n = list.length;

    for(let i = 0; i < n; i++)
    {
        dic[list[i]] = i;
    }

    for(let i = 0; i < n; i++)
    {
        let x = target - list[i];

        if(dic.hasOwnProperty(x) && dic[list[x]] != i)
        {
            return [i, dic[list[x]]]
        }
    }

    return [-1, -1];
}

const list = [10, 20, 30, 40, 50];
target = 90;

console.log(twoSum(list, target))