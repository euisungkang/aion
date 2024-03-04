'use server';

export async function postQuery(formData: FormData) {
    const rawFormData = {
        search: formData.get('search')
    };

    console.log(rawFormData.search);
}
