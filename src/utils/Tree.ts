interface People {
  id: string,
  name: string,
  pid: string,
  job: string,
  children?: People[]
}

function transTree(list:People[]) {
  // 先声明一个数组存放转换好的数据
  const treeData: People[] = []

  // 将数据进行遍历
  list.forEach(item => {
    // 首先将顶层数据push到数组中
    if (!item.pid) {
      treeData.push(item)
    }

    // 查找顶层数据相关的子集
    const children = list.filter(obj => item.id === obj.pid)

    // 将子集赋值给子集数据
    if(children.length) {
      item.children = children
    }
  })

  return treeData
}

export {
  transTree
}