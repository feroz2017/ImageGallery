import _ from 'lodash'
export default function paginate(items,currentPage,size){
    const index = (currentPage - 1)*size;
    console.log(index);
    console.log(size);
    return _(items).slice(index).take(size).value()
}