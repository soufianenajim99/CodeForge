import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import axiosInstance from "@/api/axios";
import { Link, useNavigate } from "react-router";
import { User } from "@/types/User";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await axiosInstance.post<User>("/auth/login", data);

      const { id, token, email, role, expiresIn } = response.data;

      // Store in Redux
      dispatch(login({ user: { id, email, role }, token }));

      // Store in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", id.toString());

      // Redirect based on role (optional)
      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (role === "PARTICIPANT") {
        navigate("/participant/dashboard");
      } else if (role === "PROBLEM_CREATOR") {
        navigate("/creator/dashboard");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Erreur de connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="w-full flex items-center justify-center py-16">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email est requis" })}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mot de Passe
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Mot de passe est requis",
                })}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Votre mot de passe"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-900 text-white rounded-lg text-lg font-semibold"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-green-800">
                Inscrivez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
