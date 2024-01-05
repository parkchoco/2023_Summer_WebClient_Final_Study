try {
    const error = new Error('메시지');
    error.name = '내 마음대로 오류';
    error.message = '오류의 메시지';

    throw error;
} catch (exception){
    console.log(`${exception.name} 예외가 발생했습니다.`);
    console.log(exception.message);
}