import Select from 'react-select'

export default _=> {
    const options=[
        {value:'bn',lable: <><img src="/ava/bn.png" alt="BN" /><span>BN</span></>},
        {value:'bistard',lable: <><img src="/ava/bistard.png" alt="bistard" /><span>bistard</span></>},
        {value:'tsk',lable: <><img src="/ava/tsk.png" alt="TSK" /><span>TSK</span></>},
        {value:'jerry',lable: <><img src="/ava/jerry.png" alt="Jerry" /><span>Jerry</span></>},
        {value:'jeff',lable: <><img src="/ava/jeff.png" alt="Jeff" /><span>Jeff</span></>},
    ]
    return (<div id='illiase-login'>
    <h1>Member Login</h1>
    <h2>Login ut Membrum</h2>
    <div>
        <label htmlFor="u"></label>
        <Select id='u' options={options} />
        <label htmlFor="pw">Key Pin</label>
        <input
            id="pw"
            type="password"
            required
        />
    </div>
    </div>);
}