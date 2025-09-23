import { useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useBreakPoint } from "@/hooks/useBreakpoint";
=======
import { useBreakPoint } from "@/hooks/useBreakpoint"
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
import { useBreakPoint } from "@/hooks/useBreakpoint";
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
import { Footer } from "@/components/UI/Footer/Footer";
import { ItemHeader } from "@/components/UI/Nav/ItemHeader";
import { Outlet } from "react-router-dom";
export function ProductLayout() {
  const { isTablet, isMobile } = useBreakPoint();
  const [itemsPerPage, setItemsPerPage] = useState(null);

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(4);
    } else if (isTablet) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(10);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }, [isMobile, isTablet]);
=======
  }, [isMobile, isTablet])
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
  }, [isMobile, isTablet]);
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)

  return (
    <>
      <ItemHeader />
      <Outlet context={{ isMobile, isTablet, itemsPerPage }} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
      {isMobile ? (
        <Footer type={'mobile'} />
      ) : (
        <Footer />
      )}
<<<<<<< HEAD
    </>
  );
=======
      <Footer />
=======
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
    </>
<<<<<<< HEAD
  )
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}