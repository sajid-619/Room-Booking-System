<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoomRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'room_name' => 'required',
            'room_type' => 'required',
            'room_qty' => 'required',
            'start_date' => 'required',
            'end_date' => 'required|after_or_equal:start_date',
            'room_number' => [
                'required', 
                Rule::unique('rooms')->where(function ($query) {
                    $query->where('end_date', '>=', $this->start_date);
                })
            ]
        ];

        return $rules;
    }
}
