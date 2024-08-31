import Image from "next/image";
import { assets, blog_data } from '@/Assets/assets'

const Rowtem = ({authorImg,title,date,deleteBlog,id}) => {

    return(
        <tr className="bg-white border-b text-left border-r">
                <th className="sm:flex hidden items-center gap-3 px-6 py-4 font-medium">
                    <Image alt="" src={authorImg ? authorImg: assets.authorImg} />
                </th>
                <td className="px-6 py-4">
                    { title ? title : 'No Title'}
                </td>
                <td className="px-6 py-4">
                    {new Date(date).toDateString()}
                </td>
                <td className="px-6 py-4 text-xl text-red-600 font-bold cursor-pointer" onClick = {() => deleteBlog(id)}>X</td>
        </tr>
    );
}

export default Rowtem;