export interface TimeByShowing{
    idShowing: string,
    showTime: string,
    vipPrice: number,
    normalPrice: number
}
export interface BranchByShowing{
    idBranch: string,
    cinemaBranchName: string,
    cinemaBranchCode: string,
    slug: string,
    location:string,
    cinema_chain_id: string,
    listTime:TimeByShowing[],
}

export interface Showing {
    id: string,
    cinemaName: string,
    cinemaCode: string,
    slug:string,
    logo:string,
    listBranch:BranchByShowing[]
}
