import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import axiosInstance from "@/api/axios";
import Navbar from "@/components/Navbar";
import { Link } from "react-router";

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  nationality: string;
  organizationType: string;
  organizationName: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const dispatch = useDispatch();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const response = await axiosInstance.post(
        "/auth/register/participant",
        data
      );
      const { token, email, role, id, expiresIn } = response.data;

      dispatch(login({ user: { email, role, id }, token }));

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      window.location.href = "/participant/dashboard";
    } catch (error: any) {
      console.error(
        "Registration failed",
        error.response?.data || error.message
      );
      alert("Erreur lors de l'inscription. Vérifiez vos informations.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full flex items-center justify-center py-16">
        <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Créez votre Compte
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <input
              {...register("username", { required: "Nom requis" })}
              type="text"
              placeholder="Nom d'utilisateur"
              className="w-full p-3 border rounded-lg"
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            {/* Email */}
            <input
              {...register("email", { required: "Email requis" })}
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            {/* Password */}
            <input
              {...register("password", { required: "Mot de passe requis" })}
              type="password"
              placeholder="Mot de passe"
              className="w-full p-3 border rounded-lg"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            {/* Nationality */}
            <input
              {...register("nationality", { required: "Nationalité requise" })}
              type="text"
              placeholder="Nationalité"
              className="w-full p-3 border rounded-lg"
            />
            {errors.nationality && (
              <span className="text-red-500">{errors.nationality.message}</span>
            )}

            {/* Organization Type */}
            <select
              {...register("organizationType", { required: "Type requis" })}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Sélectionnez un type</option>
              <option value="École">École</option>
              <option value="Université">Université</option>
              <option value="Entreprise">Entreprise</option>
              <option value="Individuel">Individuel</option>
            </select>
            {errors.organizationType && (
              <span className="text-red-500">
                {errors.organizationType.message}
              </span>
            )}

            {/* Organization Name */}
            <input
              {...register("organizationName", { required: "Nom requis" })}
              type="text"
              placeholder="Nom de l'organisation"
              className="w-full p-3 border rounded-lg"
            />
            {errors.organizationName && (
              <span className="text-red-500">
                {errors.organizationName.message}
              </span>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-green-900 text-white rounded-lg text-lg font-semibold"
            >
              S'inscrire
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-green-800 font-semibold">
                Connectez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
