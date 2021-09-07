
superbowlWin = (arr) => {
    const win = arr.find( ({ result }) => result === 'W' );
    return win ? win.year : win
}