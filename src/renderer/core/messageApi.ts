import { ElMessage } from 'element-plus'

export const showMessage = {
  info(msg: string) {
    ElMessage({
      type: 'info',
      showClose: true,
      grouping: true,
      center: true,
      dangerouslyUseHTMLString: true,
      message: msg
    })
  },
  success(msg: string) {
    ElMessage({
      type: 'success',
      showClose: true,
      grouping: true,
      center: true,
      dangerouslyUseHTMLString: true,
      message: msg
    })
  },
  warning(msg: string) {
    ElMessage({
      type: 'warning',
      showClose: true,
      grouping: true,
      center: true,
      dangerouslyUseHTMLString: true,
      message: msg
    })
  },
  error(msg: string) {
    ElMessage({
      type: 'error',
      showClose: true,
      grouping: true,
      center: true,
      dangerouslyUseHTMLString: true,
      message: msg
    })
  }
}
