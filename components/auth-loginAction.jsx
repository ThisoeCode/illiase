
export function LoginButton({provider,disable,children,...props}){
  return <button
    disabled = {!!disable}
    id = {`${provider}-ico`}
    style = {disable?{display:"none"}:null}
    className = "provider-icon"
    title = {'Login with '+provider}
    {...props}
  >
    {children}
  </button>
}