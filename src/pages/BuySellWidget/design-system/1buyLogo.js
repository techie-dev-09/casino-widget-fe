import React from 'react';

function BuyLogo({ widgetTheme = 'light', height = '32' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 145 32"
      fill="none">
      <path
        d="M136.349 7.37109C137.954 7.37109 139.401 7.73438 140.69 8.46094C141.979 9.1875 142.987 10.2012 143.714 11.502C144.452 12.791 144.821 14.25 144.821 15.8789C144.821 17.5078 144.452 18.9727 143.714 20.2734C142.987 21.5625 141.979 22.5703 140.69 23.2969C139.401 24.0234 137.954 24.3867 136.349 24.3867C134.743 24.3867 133.296 24.0234 132.007 23.2969C130.718 22.5703 129.704 21.5625 128.966 20.2734C128.239 18.9727 127.876 17.5078 127.876 15.8789C127.876 14.25 128.239 12.791 128.966 11.502C129.704 10.2012 130.718 9.1875 132.007 8.46094C133.296 7.73438 134.743 7.37109 136.349 7.37109ZM136.349 9.97266C135.212 9.97266 134.21 10.2246 133.343 10.7285C132.487 11.2207 131.825 11.918 131.356 12.8203C130.888 13.7109 130.653 14.7305 130.653 15.8789C130.653 17.0273 130.888 18.0527 131.356 18.9551C131.825 19.8457 132.487 20.543 133.343 21.0469C134.21 21.5391 135.212 21.7852 136.349 21.7852C137.485 21.7852 138.481 21.5391 139.337 21.0469C140.204 20.543 140.872 19.8457 141.341 18.9551C141.81 18.0527 142.044 17.0273 142.044 15.8789C142.044 14.7305 141.81 13.7109 141.341 12.8203C140.872 11.918 140.204 11.2207 139.337 10.7285C138.481 10.2246 137.485 9.97266 136.349 9.97266Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M115.555 7.75781C115.954 7.75781 116.235 7.85156 116.399 8.03906C116.575 8.21484 116.663 8.51953 116.663 8.95312V21.6094H122.305C122.704 21.6094 122.985 21.7031 123.149 21.8906C123.325 22.0664 123.413 22.3711 123.413 22.8047C123.413 23.2383 123.325 23.5488 123.149 23.7363C122.985 23.9121 122.704 24 122.305 24H108.524C108.126 24 107.839 23.9121 107.663 23.7363C107.499 23.5488 107.417 23.2383 107.417 22.8047C107.417 22.3711 107.499 22.0664 107.663 21.8906C107.839 21.7031 108.126 21.6094 108.524 21.6094H114.026V10.1484H109.579C109.18 10.1484 108.893 10.0605 108.718 9.88477C108.553 9.69727 108.471 9.38672 108.471 8.95312C108.471 8.51953 108.553 8.21484 108.718 8.03906C108.893 7.85156 109.18 7.75781 109.579 7.75781H115.555ZM114.993 0.0410156C115.637 0.0410156 116.077 0.128906 116.311 0.304688C116.546 0.46875 116.663 0.761719 116.663 1.18359V3.46875C116.663 3.89062 116.546 4.18945 116.311 4.36523C116.077 4.5293 115.637 4.61133 114.993 4.61133C114.348 4.61133 113.909 4.5293 113.675 4.36523C113.44 4.18945 113.323 3.89062 113.323 3.46875V1.18359C113.323 0.761719 113.44 0.46875 113.675 0.304688C113.909 0.128906 114.348 0.0410156 114.993 0.0410156Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M93.4968 18.7266C94.3406 18.7266 94.9441 18.8145 95.3074 18.9902C95.6824 19.1543 95.8699 19.4355 95.8699 19.834V23.0684C95.8699 23.4668 95.6824 23.7539 95.3074 23.9297C94.9441 24.0938 94.3406 24.1758 93.4968 24.1758C92.6531 24.1758 92.0437 24.0938 91.6687 23.9297C91.3054 23.7539 91.1238 23.4668 91.1238 23.0684V19.834C91.1238 19.4355 91.3054 19.1543 91.6687 18.9902C92.0437 18.8145 92.6531 18.7266 93.4968 18.7266Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M80.8774 7.75781C81.2759 7.75781 81.5571 7.85156 81.7212 8.03906C81.897 8.21484 81.9849 8.51953 81.9849 8.95312C81.9849 9.38672 81.897 9.69727 81.7212 9.88477C81.5571 10.0605 81.2759 10.1484 80.8774 10.1484H79.7876L72.5981 24.8789C71.8364 26.4375 71.0923 27.6621 70.3657 28.5527C69.6392 29.4434 68.8188 30.0938 67.9048 30.5039C67.0024 30.9258 65.9009 31.1602 64.6001 31.207C64.1899 31.2188 63.8735 31.1133 63.6509 30.8906C63.4282 30.6797 63.3169 30.2988 63.3169 29.748C63.3169 28.9863 63.6274 28.5879 64.2485 28.5527C65.3735 28.4941 66.2642 28.3066 66.9204 27.9902C67.5884 27.6738 68.1978 27.1289 68.7485 26.3555C69.311 25.5938 69.9966 24.3984 70.8052 22.7695L64.3716 10.1484H63.2642C62.8657 10.1484 62.5786 10.0605 62.4028 9.88477C62.2388 9.69727 62.1567 9.38672 62.1567 8.95312C62.1567 8.51953 62.2388 8.21484 62.4028 8.03906C62.5786 7.85156 62.8657 7.75781 63.2642 7.75781H69.4868C69.8853 7.75781 70.1665 7.85156 70.3306 8.03906C70.5063 8.21484 70.5942 8.51953 70.5942 8.95312C70.5942 9.38672 70.5063 9.69727 70.3306 9.88477C70.1665 10.0605 69.8853 10.1484 69.4868 10.1484H67.2368L72.1938 20.0273L76.9224 10.1484H75.3579C74.9595 10.1484 74.6724 10.0605 74.4966 9.88477C74.3325 9.69727 74.2505 9.38672 74.2505 8.95312C74.2505 8.51953 74.3325 8.21484 74.4966 8.03906C74.6724 7.85156 74.9595 7.75781 75.3579 7.75781H80.8774Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M56.3049 7.75781C56.7034 7.75781 56.9846 7.85156 57.1487 8.03906C57.3245 8.21484 57.4124 8.51953 57.4124 8.95312V21.6094H58.8538C59.2522 21.6094 59.5334 21.7031 59.6975 21.8906C59.8733 22.0664 59.9612 22.3711 59.9612 22.8047C59.9612 23.2383 59.8733 23.5488 59.6975 23.7363C59.5334 23.9121 59.2522 24 58.8538 24H56.0588C55.6604 24 55.3733 23.9121 55.1975 23.7363C55.0334 23.5605 54.9514 23.2559 54.9514 22.8223V20.6953C54.178 21.8906 53.2698 22.8047 52.2268 23.4375C51.1956 24.0703 50.0823 24.3867 48.887 24.3867C47.8206 24.3867 46.8948 24.1582 46.1096 23.7012C45.3245 23.2324 44.7209 22.5645 44.2991 21.6973C43.8772 20.8301 43.6663 19.8164 43.6663 18.6562V10.1484H42.2249C41.8264 10.1484 41.5393 10.0605 41.3635 9.88477C41.1995 9.69727 41.1174 9.38672 41.1174 8.95312C41.1174 8.51953 41.1995 8.21484 41.3635 8.03906C41.5393 7.85156 41.8264 7.75781 42.2249 7.75781H45.1956C45.594 7.75781 45.8752 7.85156 46.0393 8.03906C46.2151 8.21484 46.303 8.51953 46.303 8.95312V18.3926C46.303 19.4355 46.5432 20.2617 47.0237 20.8711C47.5042 21.4805 48.2131 21.7852 49.1506 21.7852C50.1467 21.7852 51.0725 21.498 51.928 20.9238C52.7952 20.3496 53.4866 19.5586 54.0022 18.5508C54.5178 17.543 54.7756 16.418 54.7756 15.1758V10.1484H52.2795C51.8811 10.1484 51.594 10.0605 51.4182 9.88477C51.2542 9.69727 51.1721 9.38672 51.1721 8.95312C51.1721 8.51953 51.2542 8.21484 51.4182 8.03906C51.594 7.85156 51.8811 7.75781 52.2795 7.75781H56.3049Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M23.5061 0.9375C23.9045 0.9375 24.1858 1.03125 24.3499 1.21875C24.5256 1.39453 24.6135 1.69922 24.6135 2.13281V10.2715C26.1252 8.33789 27.9827 7.37109 30.1858 7.37109C31.6389 7.37109 32.9397 7.7168 34.0881 8.4082C35.2366 9.08789 36.1389 10.0723 36.7952 11.3613C37.4514 12.6387 37.7795 14.1445 37.7795 15.8789C37.7795 17.6133 37.4514 19.125 36.7952 20.4141C36.1389 21.6914 35.2366 22.6758 34.0881 23.3672C32.9397 24.0469 31.6389 24.3867 30.1858 24.3867C29.0374 24.3867 27.9768 24.1289 27.0042 23.6133C26.0315 23.0977 25.176 22.3594 24.4377 21.3984V22.8047C24.4377 23.2383 24.3499 23.5488 24.1741 23.7363C24.01 23.9121 23.7288 24 23.3303 24H20.5354C20.137 24 19.8499 23.9121 19.6741 23.7363C19.51 23.5488 19.428 23.2383 19.428 22.8047C19.428 22.3711 19.51 22.0664 19.6741 21.8906C19.8499 21.7031 20.137 21.6094 20.5354 21.6094H21.9768V3.32812H20.1838C19.7854 3.32812 19.4983 3.24023 19.3225 3.06445C19.1584 2.87695 19.0764 2.56641 19.0764 2.13281C19.0764 1.69922 19.1584 1.39453 19.3225 1.21875C19.4983 1.03125 19.7854 0.9375 20.1838 0.9375H23.5061ZM30.01 9.97266C28.967 9.97266 28.0354 10.207 27.2151 10.6758C26.4065 11.1445 25.7678 11.8242 25.2991 12.7148C24.842 13.6055 24.6135 14.6602 24.6135 15.8789C24.6135 17.0977 24.842 18.1523 25.2991 19.043C25.7678 19.9336 26.4065 20.6133 27.2151 21.082C28.0354 21.5508 28.967 21.7852 30.01 21.7852C31.053 21.7852 31.9495 21.5391 32.6995 21.0469C33.4495 20.543 34.0178 19.8457 34.4045 18.9551C34.803 18.0645 35.0022 17.0391 35.0022 15.8789C35.0022 14.7188 34.803 13.6934 34.4045 12.8027C34.0178 11.9121 33.4495 11.2207 32.6995 10.7285C31.9495 10.2246 31.053 9.97266 30.01 9.97266Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
      <path
        d="M14.1211 21.6094C14.5195 21.6094 14.8008 21.7031 14.9648 21.8906C15.1406 22.0664 15.2285 22.3711 15.2285 22.8047C15.2285 23.2383 15.1406 23.5488 14.9648 23.7363C14.8008 23.9121 14.5195 24 14.1211 24H2.27344C1.875 24 1.58789 23.9121 1.41211 23.7363C1.24805 23.5488 1.16602 23.2383 1.16602 22.8047C1.16602 22.3711 1.24805 22.0664 1.41211 21.8906C1.58789 21.7031 1.875 21.6094 2.27344 21.6094H7.00195V6.52734L2.625 9.25195C2.42578 9.36914 2.24414 9.42773 2.08008 9.42773C1.70508 9.42773 1.38281 9.1875 1.11328 8.70703C0.949219 8.42578 0.867188 8.15625 0.867188 7.89844C0.867188 7.5 1.04883 7.19531 1.41211 6.98438L8.03906 2.90625C8.27344 2.76562 8.50781 2.69531 8.74219 2.69531C9 2.69531 9.21094 2.7832 9.375 2.95898C9.55078 3.12305 9.63867 3.35742 9.63867 3.66211V21.6094H14.1211Z"
        fill={`var(--${widgetTheme}-primary-text-color)`}
      />
    </svg>
  );
}

export default BuyLogo;
