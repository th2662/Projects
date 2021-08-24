// 28도 이상: A(민소매), J(반팔), I(반바지), O(원피스)
//
// 23~27 : J(반팔), N(얇은셔츠), I(반바지), G(면바지)
//
// 20~22 : B(가디건),  C(긴팔), G(면바지), P(청바지), Y(후드티), W(슬랙스), V(스키니), U(블라우스)
//
// 17~19 : M(얇은 니트), F(맨투맨), P(청바지), B(가디건), Y(후드티), G(면바지), W(슬랙스), O(원피스)
//
// 12~16 : P(청바지), G(면바지), L(야상), K(스타킹), B(가디건), T(바람막이)
//
// 9~11 : Q(트렌치코트), P(청바지), L(야상), D(니트), K(스타킹)
//
// 5~8 : S(가죽자켓), E(레깅스), D(니트)
//
// 4 ~ : R(패딩), X(코트), H(목도리)


let D1 = {R, X, H}

let D2 = {S, E, D}

let D3 = {Q, P, L, D, K}

let D4 = {P, G, L, K, B, T}

let D5 = {M, F, P, B, Y, G, W, O}

let D6 = {B, C, G, P, Y, W, V, U}

let D7 = {J, N, I, G}

let D8 = {A, J, I, O}




<script type="text/javascript">


    function showImage1() {
        let imgNum = Math.round(Math.random() * imgArray.length);
        let objImg = document.getElementById("introImg");
        objImg.src = imgArray[imgNum];
    }


    </script>



<!--민소매-->
let A = new Array();
A[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31388fff-1780-43d5-be4d-7a5ebf98a2c2/민소매1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161931Z&X-Amz-Expires=86400&X-Amz-Signature=52a7cc71f908761ab464687763b621ba8aed6eb43e73c1f76a972bfe0ed28820&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25AF%25BC%25EC%2586%258C%25EB%25A7%25A41.jpeg%22";
A[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d156dc0f-bfc1-41d0-8f97-58cb86a932c1/민소매2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161935Z&X-Amz-Expires=86400&X-Amz-Signature=c1d16e681584bc5f9ef96252e9f1c21d7487fa61623b643cb9afc886288c86be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25AF%25BC%25EC%2586%258C%25EB%25A7%25A42.jpeg%22";
A[2] = "https://unsplash.com/photos/MPfyh3xJ1iE";

<!--가디건-->
let B = new Array();
B[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fe4311c-c73d-4370-8267-978ffc753d17/가디건1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T160851Z&X-Amz-Expires=86400&X-Amz-Signature=97799e6e70b0484da2907c94b1d8485291e9e35316647338213b9cfb8e4695f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B0%2580%25EB%2594%2594%25EA%25B1%25B41.jpeg%22";
B[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/78ae4a1a-f1f5-4cd7-9650-ae5537ae0579/가디건2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T160914Z&X-Amz-Expires=86400&X-Amz-Signature=3c81a19d2605cadb6d5e702f2c86e6a70e24772ed594ab6e657401c3bf1724c0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B0%2580%25EB%2594%2594%25EA%25B1%25B42.jpeg%22";
B[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f419b6a4-e176-4c3b-8bb3-30dc4001c388/가디건3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T160946Z&X-Amz-Expires=86400&X-Amz-Signature=42dd5a932c2ddfc6b81b456e988ce474ddf18535a4fdcf036c91d14bdf8b1d25&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B0%2580%25EB%2594%2594%25EA%25B1%25B43.jpeg%22";

<!--긴팔-->
let C = new Array();
C[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4179307f-9a2c-40ae-8d38-d39e518c82bd/긴팔1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161639Z&X-Amz-Expires=86400&X-Amz-Signature=c60408e0ffe40dd3adad8070595607d6ca54ad0ce98ac0cf6a21b59f812b721a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B8%25B4%25ED%258C%25941.jpeg%22";
C[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e6d9812c-b7ee-4308-9e14-ecb1081208ed/긴팔2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161319Z&X-Amz-Expires=86400&X-Amz-Signature=b25e7261cc019c9b77cb2596e055a111d3384c7786ad439aa344a4ebcdfa180b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B8%25B4%25ED%258C%25942.jpeg%22";
C[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1279d596-ae74-4c66-9b87-ff6b3593233a/긴팔3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161341Z&X-Amz-Expires=86400&X-Amz-Signature=c31e18508a0cfac4129c8a60a4f6aeb9e5a19fe1fab7db9546c28a9d58db4016&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B8%25B4%25ED%258C%25943.jpeg%22";

<!--니트-->
let D = new Array();
C[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3032def2-1945-436e-b432-95514aa0b4fb/니트1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161354Z&X-Amz-Expires=86400&X-Amz-Signature=a8d03009a4547d21692aca2bcd04d6e339190c833cbdb233ef2692908c63566c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258B%2588%25ED%258A%25B81.jpeg%22";
C[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd3cd6a1-ac8d-4662-b864-c74f253e92ff/니트2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161520Z&X-Amz-Expires=86400&X-Amz-Signature=629914dd83e309a6459539de7f70592fad84e66eb76d2cc0dfd029d133898a2f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258B%2588%25ED%258A%25B82.jpeg%22";
C[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a35360f-e4c4-486b-bc67-ad16d2a2d1b0/니트3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161505Z&X-Amz-Expires=86400&X-Amz-Signature=33989767778d209898280cf384f6f91bfa67788b58e0e91c8e6dbaa9a4a08e8e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%258B%2588%25ED%258A%25B83.jpeg%22";

<!--레깅스-->
let E = new Array();
E[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f69a20fd-20c3-4b21-9218-d289fc33528b/레깅스1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161609Z&X-Amz-Expires=86400&X-Amz-Signature=9c3c87e80d38a8e1d705cfbbca7d33c7979be489f6024358f867730780b71829&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A0%2588%25EA%25B9%2585%25EC%258A%25A41.jpeg%22";
E[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2060ce23-0b88-4a42-b4e8-b25f5c60093b/레깅스2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161613Z&X-Amz-Expires=86400&X-Amz-Signature=9fcbe8afa700ca64254123e75147cdf7ed28c5d92136c06d390b2647cf8b92dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A0%2588%25EA%25B9%2585%25EC%258A%25A42.jpeg%22";
E[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13d87d5e-942f-48ef-bbf4-c44ac5dafb6a/레깅스3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161617Z&X-Amz-Expires=86400&X-Amz-Signature=5a4208ad4e41df027e23f4931863d29bdcc8ea7affa98f8f7239c38c569947dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A0%2588%25EA%25B9%2585%25EC%258A%25A43.jpeg%22";

<!--맨투맨-->
let F = new Array();
F[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f6df486-4228-4ab0-881b-a3503fec6aa4/맨투맨1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161725Z&X-Amz-Expires=86400&X-Amz-Signature=e63f09100a666cabf022c4573666acfea4ec32d62910d1b35eac1c7f51ef640d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A7%25A8%25ED%2588%25AC%25EB%25A7%25A81.jpeg%22";
F[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f5d4a3a-6619-4cfc-a085-027e14d4e037/맨투맨2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161724Z&X-Amz-Expires=86400&X-Amz-Signature=ba474f0321bf59fee3a3d44b36d422037d967eeb1ad848ef0415536608f6a87e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A7%25A8%25ED%2588%25AC%25EB%25A7%25A82.jpeg%22";
F[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9386763f-e7e6-4924-ab19-fe1fc81ab653/맨투맨3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161728Z&X-Amz-Expires=86400&X-Amz-Signature=67aeee01c18dbd62f62f462dd62a63078c5618bd8a7ecfab9b268403c6621d32&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A7%25A8%25ED%2588%25AC%25EB%25A7%25A83.jpeg%22";

<!--면바지-->
let G = new Array();
G[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/486f38f8-37fa-4e1f-8e03-5b6b26e27ef1/면바지1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161807Z&X-Amz-Expires=86400&X-Amz-Signature=a84bc7175327c230ea949f4483f5b75b5e76f0a2a22a89c01e3940aef40bda77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A9%25B4%25EB%25B0%2594%25EC%25A7%25801.jpeg%22";
G[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b3d7b137-3256-485c-a8d5-bc608daa617e/면바지2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161810Z&X-Amz-Expires=86400&X-Amz-Signature=cb26746adaff32aa916dcf7d8c9e4f21471bfdb26e937af48d3f17c07123f0b5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A9%25B4%25EB%25B0%2594%25EC%25A7%25802.jpeg%22";
G[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/60596dc8-862b-472b-a1fc-394143715d84/면바지3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161813Z&X-Amz-Expires=86400&X-Amz-Signature=fe184b2874b01f7cc5c1fab3d625a167ed68739b2a6998e2c5a88df59db50cc9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25A9%25B4%25EB%25B0%2594%25EC%25A7%25803.jpeg%22";

<!--목도리-->
let H = new Array();
H[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1d1e292-4cc4-4885-9bac-7737ea4a6f86/목도리1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161849Z&X-Amz-Expires=86400&X-Amz-Signature=04930952ecb5f6e6f3ae9f8ad41930222c89182bea1355ea42b6092df8d5ca74&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25AA%25A9%25EB%258F%2584%25EB%25A6%25AC1.jpeg%22";
H[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7405a69a-838d-4c59-917b-8d79240e524e/목도리2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161853Z&X-Amz-Expires=86400&X-Amz-Signature=4369c82aaaa8ec334a1a80f8c7f99c199a1c3c38145651f8db3ac57afb675655&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25AA%25A9%25EB%258F%2584%25EB%25A6%25AC2.jpeg%22";
H[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c606b5d-f5be-424d-bdce-0947f9dcdf16/목도리3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T161856Z&X-Amz-Expires=86400&X-Amz-Signature=2a487b400e0def4577e2e81e19111ffb732aa332eda2b6e0ba93f748f5b81983&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25AA%25A9%25EB%258F%2584%25EB%25A6%25AC3.jpeg%22";

<!--반바지-->
let I = new Array();
I[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6606948e-5516-411f-bc35-069270f6585e/반바지1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162011Z&X-Amz-Expires=86400&X-Amz-Signature=3fb394cc1e84584f5490567595b2e13b0426f7a556f6fc6349afbaf7c967a035&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25EB%25B0%2594%25EC%25A7%25801.jpeg%22";
I[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45681dcb-924b-41dd-82bd-a27863de42d1/반바지2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162016Z&X-Amz-Expires=86400&X-Amz-Signature=4c083496fd34a88c8c18e1da799d8bac3dd64bf5d681f4b1dcaeb7aae59deb24&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25EB%25B0%2594%25EC%25A7%25802.jpeg%22";
I[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/42c72cab-46e7-4afc-afc4-a3c1cd369c6b/반바지3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162020Z&X-Amz-Expires=86400&X-Amz-Signature=9c221c7c681d571c9fa8b7acd104bbf32854404aff84ad6f8a69ea4bb1ecba81&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25EB%25B0%2594%25EC%25A7%25803.jpeg%22";

<!--반팔-->
let J = new Array();
J[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d64b41fa-71d0-4df4-a6d9-1f17a1502a69/반팔1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162115Z&X-Amz-Expires=86400&X-Amz-Signature=27ffb2556996b57817254505f8993dab65ceeea608bf377008f0688bd72fb565&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25ED%258C%25941.jpeg%22";
J[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08104864-4e8c-49f7-bb46-52d430865c5b/반팔2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162120Z&X-Amz-Expires=86400&X-Amz-Signature=f7dc66c1caac379e7322fb18901b025eb283c5f28700e21ad3b9e4fbf2f07011&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25ED%258C%25942.jpeg%22";
J[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/efd46654-a661-46e0-858a-417a5f4fedee/반팔3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162124Z&X-Amz-Expires=86400&X-Amz-Signature=da89c03866f93aadf95fa624d4d038982628042a6c94b73ef4db4ab1f9f2b39e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EB%25B0%2598%25ED%258C%25943.jpeg%22"

// <!--스타킹-->
let K = new Array();
K[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b4832dd4-cdfb-4a8f-8661-57a11f764715/스타킹1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162143Z&X-Amz-Expires=86400&X-Amz-Signature=2f60bdb3cd37595fc49ae161b73ad5f2b977ac4da9a1a88b9f0a4ffaecd5ff4b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%258A%25A4%25ED%2583%2580%25ED%2582%25B91.jpeg%22";
K[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/15bc4dc4-72a4-4d5a-b296-9184d6303f06/스타킹2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162150Z&X-Amz-Expires=86400&X-Amz-Signature=358b0710a161c3701a2417d825fa4292f17722ed3e99f87a7dbdcb9a321c6586&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%258A%25A4%25ED%2583%2580%25ED%2582%25B92.jpeg%22";
K[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45c54050-6c77-41c0-99fc-9d381f01690e/스타킹3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162154Z&X-Amz-Expires=86400&X-Amz-Signature=1d248f74f8ae57a2f55066064ae8106cd6620237884dd9ea0b03781eb3ab3e33&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%258A%25A4%25ED%2583%2580%25ED%2582%25B93.jpeg%22";

<!--야상-->
let L = new Array();
L[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/226f6103-0830-48c0-adb1-9889de8b0474/야상1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162225Z&X-Amz-Expires=86400&X-Amz-Signature=b2f265da175bd24642529d7c394ee6ba4f23c9fb98f6c5fb746f881ff4812636&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2595%25BC%25EC%2583%25811.jpeg%22";

<!--얇은 니트-->
let M = new Array();
M[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a48b8bc1-a7ad-4aeb-bbcf-ac2421556f6f/얇은니트1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162244Z&X-Amz-Expires=86400&X-Amz-Signature=6c687e105166176cc1e854e74761666a137816b5b7d51868ce715c626042b322&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EB%258B%2588%25ED%258A%25B81.jpeg%22";
M[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bfe29f9a-d772-44df-b922-a882d0c95056/얇은니트2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162247Z&X-Amz-Expires=86400&X-Amz-Signature=4374e7de413d489cc94afbd0d1f1008674e603492c0ea5a1d895b8cff10019bf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EB%258B%2588%25ED%258A%25B82.jpg%22";
M[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6cddd8e4-a42f-4e25-9e5b-76df4e72c995/얇은니트3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162250Z&X-Amz-Expires=86400&X-Amz-Signature=c8f99ff26f746ce8819f33fead7b4a730a5bf888be7fbc9e280cb65098afb227&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EB%258B%2588%25ED%258A%25B83.jpeg%22";

<!--얇은 셔츠-->
let N = new Array();
N[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a890173d-78a8-4009-8865-042f2ccf45bc/얇은셔츠1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162325Z&X-Amz-Expires=86400&X-Amz-Signature=d178701e7d7de2f6981d3eda30cc976735c8757b1c6d9b0c5ac52c9a806dfcdb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EC%2585%2594%25EC%25B8%25A01.jpeg%22";
N[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da430b47-51c6-4886-a73d-da1ab7c7ce35/얇은셔츠2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162328Z&X-Amz-Expires=86400&X-Amz-Signature=90eaab4a6369f606696b6f0cb33ebebffeb560d7b63a3c2e705d5c68a1bef43e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EC%2585%2594%25EC%25B8%25A02.jpeg%22";
N[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2b60e4a-4cd2-4916-91ec-06cc5fb071ee/얇은셔츠3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162331Z&X-Amz-Expires=86400&X-Amz-Signature=6f23b716e50eac96977fb440d4cadf784cc0cb2117cf8d82c26c505f148ce8a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%2596%2587%25EC%259D%2580%25EC%2585%2594%25EC%25B8%25A03.jpeg%22";

<!--원피스-->
let O = new Array();
O[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/793bb129-d623-4f69-ac76-8a5984a19b3e/원피스1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162359Z&X-Amz-Expires=86400&X-Amz-Signature=6a19209bdf90e8b21ba7303bc75b54c172436c2ae0e724b68badd307f058b10a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259B%2590%25ED%2594%25BC%25EC%258A%25A41.jpeg%22";
O[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/740a84c5-c7ed-429d-ad88-ac1e3d244949/원피스2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162402Z&X-Amz-Expires=86400&X-Amz-Signature=d14fedf035dac00a44da214b3e679d52828ef269431da0be534d8e21363a23ef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259B%2590%25ED%2594%25BC%25EC%258A%25A42.jpeg%22";
O[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7ac6bef5-ddc4-4681-b9ad-de850c3cf151/원피스3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162404Z&X-Amz-Expires=86400&X-Amz-Signature=69278cfbbdd8ce2cf74aa1b086f1d7da015a1833d7590cb5196f5f3d8586c5f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259B%2590%25ED%2594%25BC%25EC%258A%25A43.jpeg%22";

<!--청바지-->
let P = new Array();
P[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/def224cd-c16b-4ecd-bc76-d378e4a83f52/청바지1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162525Z&X-Amz-Expires=86400&X-Amz-Signature=632fbac770e6b142bd6df26d855152ad06338e7392590b72e8c75cc050cb2c48&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25B2%25AD%25EB%25B0%2594%25EC%25A7%25801.jpeg%22";
P[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54c5892b-7679-4145-ab37-45353ab59469/청바지2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162534Z&X-Amz-Expires=86400&X-Amz-Signature=f7e2073561c6ff091449fc5c8dfc9434db73479a10b08a270cf69790ead23f6f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25B2%25AD%25EB%25B0%2594%25EC%25A7%25802.jpeg%22";
P[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/43f3ecff-b3ed-49d5-8c35-6e1a20b40f2c/청바지3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162538Z&X-Amz-Expires=86400&X-Amz-Signature=f4d2590ca03a414d4e8695ed4cdc9ad6537a87a9251d89b5ae10371e71cfef8a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%25B2%25AD%25EB%25B0%2594%25EC%25A7%25803.jpeg%22";

<!--트렌치코트-->
let Q = new Array();
Q[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58b55f70-2177-471f-8105-7c75ae223417/트렌치코트1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162622Z&X-Amz-Expires=86400&X-Amz-Signature=0404608e39fad915cde240d87837c1ab2a93c9aad77cfe5df809b1aac8e91370&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258A%25B8%25EB%25A0%258C%25EC%25B9%2598%25EC%25BD%2594%25ED%258A%25B81.jpeg%22";
Q[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6911efae-6a34-40be-b983-4ad94124cbbb/트렌치코트2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162625Z&X-Amz-Expires=86400&X-Amz-Signature=949523c56fb502d0c724b43479b7b2900bce73a5ba450b4b509472be6a97ea34&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258A%25B8%25EB%25A0%258C%25EC%25B9%2598%25EC%25BD%2594%25ED%258A%25B82.jpeg%22";
Q[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fc3c797-8d67-4c28-b7a6-6e4e40bd5461/트렌치코트3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162630Z&X-Amz-Expires=86400&X-Amz-Signature=a4d616a1321d1cd22be8cddb038effe8542a843bc6f5e504f00878a9a4fb460a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258A%25B8%25EB%25A0%258C%25EC%25B9%2598%25EC%25BD%2594%25ED%258A%25B83.jpeg%22";

<!--패딩-->
let R = new Array();
R[0] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/88527e37-9a4e-4879-8a59-3f6c2db195fd/패딩1.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162711Z&X-Amz-Expires=86400&X-Amz-Signature=5cdb6b78563275ebb7a08c030c92ee43e38b5b8d681895e0eb5cf61e84621ec4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258C%25A8%25EB%2594%25A91.jpeg%22";
R[1] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cfdd6917-9c58-4744-b976-97709fe14612/패딩2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162715Z&X-Amz-Expires=86400&X-Amz-Signature=10052613ddaf2227840fcaf930afad645e8c25b6237402561948860bb399982a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258C%25A8%25EB%2594%25A92.jpeg%22";
R[2] = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e15699c6-7378-4161-9096-b6aee9ca2c94/패딩3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T162718Z&X-Amz-Expires=86400&X-Amz-Signature=1b1da31162c2104d2c07c82d304d19f01ffb4aaa3c71b64ab72e2c0d8339208f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25ED%258C%25A8%25EB%2594%25A93.jpeg%22";

<!--가죽자켓-->
let S = new Array();
S[0] = "https://images.unsplash.com/photo-1607892381244-0d9ac5533bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80":
S[1] = "https://images.unsplash.com/photo-1520783442300-2f83600761c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
S[2] = "https://images.unsplash.com/photo-1529882035027-7dcccf0226f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=939&q=800";
S[3] = "https://images.unsplash.com/photo-1606689288233-96192d451cc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
S[4] = "https://images.unsplash.com/photo-1553527378-5f33c2344855?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--바람막이-->
let T = new Array();
T[0] = "https://images.unsplash.com/photo-1604025677169-6b07c4b5d3c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
T[1] = "https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
T[2] = "https://unsplash.com/photos/MytejphnPiI"

// <!--블라우스-->
let U = new Array();
U[0] = "https://images.unsplash.com/photo-1558001771-bd9e266b7306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxibG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
U[1] = "https://images.unsplash.com/photo-1616384037718-103870f436fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxibG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
U[2] = "https://images.unsplash.com/photo-1589842526482-2f61badf0827?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxibG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60";
U[3] = "https://images.unsplash.com/photo-1595828204607-0d09afb58a71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

<!--스키니-->
let V = new Array();
V[0] = "https://images.unsplash.com/photo-1523419951196-9c85a25cd485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxza2lubnklMjBqZWFuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
V[1] = "https://images.unsplash.com/photo-1607039233937-86eb0bef557f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5ueSUyMGplYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
V[2] = "https://images.unsplash.com/photo-1533825828907-94649041aa67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbm55JTIwamVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--슬렉스-->
let W = new Array();
W[0] = "https://images.unsplash.com/photo-1613590171270-cb70d833aa02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHRyb3VzZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
W[1] = "https://images.unsplash.com/photo-1542595734-49653d33e0eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHx0cm91c2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
W[2] = "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyb3VzZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--코트-->
let X = new Array();
X[0] = "https://images.unsplash.com/photo-1614242144275-93dc5724fb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[1] = "https://images.unsplash.com/photo-1612462766564-895ea3388d2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29hdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[2] = "https://images.unsplash.com/photo-1605895640528-66bc5374504e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
X[3] = "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

<!--후드-->
let Y = new Array();
Y[0] = "https://images.unsplash.com/photo-1575228245458-b25e14dd04a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";
Y[1] = "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxob29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=600";
Y[2] = "https://images.unsplash.com/photo-1578172745579-92c2de4f383a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGhvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60";

