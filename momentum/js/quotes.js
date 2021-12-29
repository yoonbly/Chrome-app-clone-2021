const quotes = [
    {
        quote : "우리는 그곳에서 괴로울 거야. 하지만 그보다 많이 행복할 거야",
        author : "우리가 빛의 속도로 갈 수 없다면",
    },
    {
        quote : "좋아하는 무언가에 대해 내가 가진 자격을 떠올리지 않는 일, 더불어 타인의 자격 역시 판단하지 않는 일",
        author : "아무튼,여름",
    },
    {
        quote : "나는 아무것도 시도하지 않은 것을 후회하느니 실패를 후회하는 삶을 살겠다",
        author : "부의 추월차선",
    },
    {
        quote : "정말 강한 사람은 상처를 한번도 받지 않은 사람이 아니다. 상처가 있지만 그것을 직시하고 이겨내 더 나은 내가 된 사람이다.",
        author : "기분이 태도가 되지 않게",
    },
    {
        quote : "평범한 재능이라도 그 길을 선택한 사람이, 뛰어난 재능을 가지고 그 길을 가지 않았던 사람보다 어느 순간 앞서게 돼요.",
        author : "재능의 불시착",
    },
    {
        quote : "징징거리지 않고 앞으로 전진!어차피 인생은 후진도 반복도 못하는 일회성 전진만 있지 않은가.",
        author : "햇빛은 찬란하고 인생은 귀하니까요",
    },
    {
        quote : "이미 우리는 모두 충분히 위대하다. 결국 인생은 본인이 위대하다는 것을 깨달아가는 과정이다.",
        author : "오늘부터 개발자",
    },
    {
        quote : "자기 나름의 관점에 따른 최고의 자신이 되고자하는 꿈은 노력을 쏟을 만한 가치가 있는 꿈이다.",
        author : "평균의 종말",
    },
    {
        quote : "원하는 일에 더 많은 시간을 내는 것은, 싫어하는 일을 하는데 얼마나 더 적은 시간을 썼느냐가 결정한다.",
        author : "타이탄의 도구들",
    },
    {
        quote : "아무것도 하지 않았던 시절에 비하면 대단한 발전입니다. 더딜지라도 이미 내가 원하는 세상에 들어와 있는 사람이 되었습니다.",
        author : "나의 첫 사이드 프로젝트",
    }, 
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;