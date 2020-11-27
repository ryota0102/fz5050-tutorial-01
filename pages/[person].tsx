import {useRouter} from 'next/router';

const Person =()=>{

    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            {/*routerオブジェクトでクエリストリングを取り出す*/}
            Hello {router.query.person}!
        </div>
    );
}

export default Person