import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 유효성 검사 Custom Hook
const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateProductName = (value) => {
    if (!value || value.length === 0) {
      return '상품명을 입력해주세요';
    }
    if (value.length > 10) {
      return '상품명은 10자 이내로 입력해주세요';
    }
    return '';
  };

  const validateDescription = (value) => {
    if (!value || value.length === 0) {
      return '상품 소개를 입력해주세요';
    }
    if (value.length < 10) {
      return '상품 소개는 10자 이상 입력해주세요';
    }
    if (value.length > 100) {
      return '상품 소개는 100자 이내로 입력해주세요';
    }
    return '';
  };

  const validatePrice = (value) => {
    if (!value) {
      return '판매 가격을 입력해주세요';
    }
    if (isNaN(value) || Number(value) <= 0) {
      return '올바른 가격을 입력해주세요';
    }
    return '';
  };

  const validateTag = (value) => {
    if (value.length > 5) {
      return '태그는 5글자 이내로 입력해주세요';
    }
    return '';
  };

  const validate = (name, value) => {
    let error = '';
    switch (name) {
      case 'productName':
        error = validateProductName(value);
        break;
      case 'description':
        error = validateDescription(value);
        break;
      case 'price':
        error = validatePrice(value);
        break;
      case 'tag':
        error = validateTag(value);
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  return { errors, validate, setErrors };
};

export default function ProductRegistration() {
  const navigate = useNavigate();
  const { errors, validate } = useFormValidation();
  
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    tags: []
  });
  
  const [currentTag, setCurrentTag] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleTagInput = (e) => {
    const value = e.target.value;
    setCurrentTag(value);
    validate('tag', value);
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (currentTag.length <= 5) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, currentTag.trim()]
        }));
        setCurrentTag('');
      }
    }
  };

  const removeTag = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove)
    }));
  };

  const isFormValid = () => {
    return (
      formData.productName.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.price !== '' &&
      !errors.productName &&
      !errors.description &&
      !errors.price &&
      formData.productName.length >= 1 &&
      formData.productName.length <= 10 &&
      formData.description.length >= 10 &&
      formData.description.length <= 100 &&
      !isNaN(formData.price) &&
      Number(formData.price) > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) return;

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.productName,
          description: formData.description,
          price: Number(formData.price),
          tags: formData.tags
        })
      });

      if (response.ok) {
        const data = await response.json();
        navigate(`/items/${data.id}`);
      }
    } catch (error) {
      console.error('상품 등록 실패:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 네비게이션 바 */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold" style={{ color: '#3692FF' }}>
                판다마켓
              </div>
              <div className="hidden md:flex space-x-4">
                <button 
                  onClick={() => navigate('/community')}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  자유게시판
                </button>
                <button 
                  onClick={() => navigate('/items')}
                  className="px-4 py-2 font-semibold"
                  style={{ color: '#3692FF' }}
                >
                  중고마켓
                </button>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              로그인
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">상품 등록하기</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 상품 이미지 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              상품 이미지
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 sm:p-12 text-center hover:border-gray-400 cursor-pointer">
              <div className="text-gray-400 mb-2">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">이미지 등록</p>
            </div>
          </div>

          {/* 상품명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              상품명 *
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="상품명을 입력해주세요"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.productName 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.productName && (
              <p className="mt-1 text-sm text-red-500">{errors.productName}</p>
            )}
          </div>

          {/* 상품 소개 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              상품 소개 *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="상품 소개를 입력해주세요"
              rows="5"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                errors.description 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          {/* 판매 가격 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              판매 가격 *
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="판매 가격을 입력해주세요"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.price 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-500">{errors.price}</p>
            )}
          </div>

          {/* 태그 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              태그
            </label>
            <input
              type="text"
              value={currentTag}
              onChange={handleTagInput}
              onKeyPress={handleTagKeyPress}
              placeholder="태그를 입력 후 Enter"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.tag 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.tag && (
              <p className="mt-1 text-sm text-red-500">{errors.tag}</p>
            )}
            
            {/* 태그 칩 */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 등록 버튼 */}
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-4 rounded-lg font-semibold text-white transition-colors ${
              isFormValid()
                ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
}