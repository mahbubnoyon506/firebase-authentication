
export type ResetValue = {
    email: string,
}

export type LoginValue = {
    email: string,
    password: string
}

export type SignupValue = {
    username: string,
    email: string,
    password: string
}

export type StateType = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}