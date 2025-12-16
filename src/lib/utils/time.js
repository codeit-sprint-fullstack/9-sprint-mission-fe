import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

//comments 시간 설정
export const timeAgo = (date) => dayjs(date).fromNow();
